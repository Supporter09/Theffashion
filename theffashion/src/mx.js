import firebase from 'firebase';
import shortid from 'shortid';

const putFiles = (files) => {
  var ref = firebase.storage().ref();
  return Promise.all(
    Object.values(files).map(function (file) {
      return ref
        .child(`${shortid.generate()}-${file.name}`)
        .put(file)
        .then((r) => r.ref.getDownloadURL());
    }),
  );
};

const init = (config) => {
  firebase.initializeApp(config);
};


const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
const signUp = (email,password) => firebase.auth().createUserWithEmailAndPassword(email,password);

const referenceField = (model, _id) => {
  const db = firebase.firestore();
  return db.doc(`${model}/${_id}`);
};

const collection = (collectionName) => {
  const db = firebase.firestore();
  const firebaseCollection = db.collection(collectionName);

  const getAll = async () => {
    const data = [];
    const query = await firebaseCollection.get();
    query.forEach((doc) => {
      const snapshot = doc.data();
      snapshot._id = doc.id;
      data.push(snapshot);
    });
    return data;
  }


  const count = async (res) => {
    const r = await res.get();
    return r.docs.length;
  };

  const paginate = async (pageNumber, perPage, query, populate = '') => {
    const data = [];
    const queryValue = [];
    let res = firebaseCollection;

    for (let key in query) {
      res = res.orderBy(key);
      queryValue.push(query[key]);
    }

    if (queryValue.length > 0) {
      res = res
        .startAt(...queryValue)
        .endAt(...queryValue);
    }

    const total = await count(res);

    res = await res
      .limit(perPage * pageNumber)
      .get();

    let i = 0;
    res.forEach((doc) => {
      if (i >= (pageNumber - 1) * perPage) {
        const snapshot = doc.data();
        snapshot._id = doc.id;
        data.push(snapshot);
      }
      i += 1;
    });
    if (populate) {
      populate.map(async (populatePath) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i][populatePath]) {
            const child = await data[i][populatePath].get()
            data[i][populatePath] = child.data();
          };
        };
      });
    }
    return { data, total }
  }

  const _get = async (_id) => {
    let data;
    await firebaseCollection.doc(_id).get().then(query => {
      data = { ...query.data(), _id: query.id }
    });
    return data
  }

  const getOne = (_id, populate = '') => {
    return new Promise(async (resolve, reject) => {
      const data = await _get(_id);
      if (populate) {
        populate.map(async (populatePath) => {
          if (data[populatePath]) {
            const child = await data[populatePath].get();
            data[populatePath] = child.data();
          }
        });
        resolve(data);
      }
      resolve(data);

    });
  };

  const save = (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        await firebaseCollection.doc().set(data);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };


  const update = (_id, data) => {
    return new Promise(async (resolve, reject) => {
      try {
        await firebaseCollection.doc(_id).update(data);
        const res = await getOne(_id);
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  };


  const destroy = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        await firebaseCollection.doc(_id).delete();
        resolve({ success: 1 });
      } catch (error) {
        reject(error);
      }
    });
  }


  const saveWithId = (_id, data) => {
    return new Promise(async (resolve, reject) => {
      try {
        await firebaseCollection.doc(_id).set(data);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
  return {
    getAll,
    getOne,
    update,
    destroy,
    paginate,
    save,
    saveWithId,
  };
};

const mxFirebase = {
  init,
  putFiles,
  collection,
  referenceField,
  signIn,
  signUp,
};


const openModal = (modal, overlay) => {
  overlay.classList.add('is-open');
  modal.classList.add('is-open');
};

const closeModal = (modal, overlay) => {
  overlay.classList.remove('is-open');
  modal.classList.remove('is-open');
};

const initModal = modal => {
  if (!modal) {
    console.error("You need to provide `modal element`");
  } else {
    let overlay = document.createElement('div');
    overlay.className = 'mx-modal-overlay';
    document.body.appendChild(overlay);
    const open = () => openModal(modal, overlay);
    const close = () => closeModal(modal, overlay);
    overlay.addEventListener('click', close);
    return {
      open,
      close,
    };
  }
};

function waitFor(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
}

const initImgUpload = () => {
  document.querySelectorAll('.mx-img-upload').forEach(elem => {
    const preview = document.createElement('img');
    preview.classList.add('mx-img-preview');
    const input = document.createElement('input');
    input.type = 'file';
    input.classList.add('mx-input-file');
    elem.appendChild(preview);
    elem.appendChild(input);
    input.addEventListener('change', event => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          preview.src = reader.result;
          preview.style.display = 'block';
        }

        reader.readAsDataURL(file);
      } else {
        preview.src = "";
        preview.style.display = 'none';
      }
    });
  });
}
const checkAuth = ()=>{
  return new Promise((resolve,reject)=>{
    firebase.auth().onAuthStateChanged((user)=> {
      if(user){resolve(user)}
      else{resolve(false)};
    })
  })
}
export {
  checkAuth,
  mxFirebase,
  initModal,
  openModal,
  closeModal,
  waitFor,
  initImgUpload
};
