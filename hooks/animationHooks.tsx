import React from "react";
import { Dimensions } from "react-native";

function useCloud(Component: Function) {
  const collection: JSX.Element[] = [];
  let windowHeight = Dimensions.get("window").height;
  let count: number = 0;

  while (count < 3) {
    let col: number = Math.floor(Math.random() * (windowHeight - 110));
    let durTime: number = Math.floor(Math.random() * (20000 - 10000) + 10000);
    let delTime: number = Math.floor(Math.random() * (15000 - 500) + 500);

    let cloud: JSX.Element = (
      <Component
        topValue={col}
        durationValue={durTime}
        delayValue={delTime}
        key={count}
      />
    );

    collection.push(cloud);
    count++;
  }

  return collection;
}

export { useCloud };
