import { Storage } from "@ionic/storage";
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
  const promise = await store.get("achieves");

  return promise;
};
export const getGoal = async () => {
  const promise = await store.get("goal");

  return promise;
};
export const getRecords = async () => {
  const promise = await store.get("records");

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
getGoal().then((goal) => {
  if (!goal) {
    store.set("goal", null);
  }
});
getRecords().then((records) => {
  const array = [0];
  if (!records) {
    store.set("records", JSON.stringify(array));
  }
});
