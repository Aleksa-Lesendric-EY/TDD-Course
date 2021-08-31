import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const setup = () => {
  return shallow(<App />);
};

const findByTestAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};

describe("App testing", () => {
  it("renders without error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttribute(wrapper, "component-app");

    expect(appComponent.length).toBe(1);
  });

  it("renders increment button", () => {
    const wrapper = setup();
    const button = findByTestAttribute(wrapper, "increment-button");

    expect(button.length).toBe(1);
  });

  it("renders counter display", () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttribute(wrapper, "counter-display");

    expect(counterDisplay.length).toBe(1);
  });

  it("counter display starts at 0", () => {
    const wrapper = setup();
    const count = findByTestAttribute(wrapper, "count").text();

    expect(count).toBe("0");
  });

  it("clicking the button increments counter display", () => {
    const wrapper = setup();
    const button = findByTestAttribute(wrapper, "increment-button");

    button.simulate("click");

    const count = findByTestAttribute(wrapper, "count").text();

    expect(count).toBe("1");
  });
});
