import { Storage } from "@ionic/storage";
import { archive } from "ionicons/icons";
export const store = new Storage();
store.create();
export const getDays = async () => {
  const promise = await store.get("days");

  return promise;
};
export const getHours = async () => {
  const promise = await store.get("hours");

  return promise;
};
export const getMinutes = async () => {
  const promise = await store.get("minutes");

  return promise;
};
export const getSeconds = async () => {
  const promise = await store.get("seconds");

  return promise;
};
export const getList = async () => {
  const promise = await store.get("list");

  return promise;
};
export const getAchieves = async () => {
  const promise = await store.get("archieves");

  return promise;
};
getDays().then((days) => {
  if (!days) {
    store.set("days", 0);
  }
});
getHours().then((hours) => {
  if (!hours) {
    store.set("hours", 0);
  }
});
getMinutes().then((minutes) => {
  if (!minutes) {
    store.set("minutes", 0);
  }
});
getSeconds().then((seconds) => {
  if (!seconds) {
    store.set("seconds", 0);
  }
});
getList().then((list) => {
  if (!list) {
    const array = [];
    store.set("list", JSON.stringify(array));
  }
});
getAchieves().then((achives) => {
  if (!achives) {
    const array = [];
    store.set("achieves", JSON.stringify(array));
  }
});
