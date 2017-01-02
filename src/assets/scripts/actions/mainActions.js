import mainStore from '../stores/mainStore';

export function updateName (name){
  mainStore.changeName(name);
}

