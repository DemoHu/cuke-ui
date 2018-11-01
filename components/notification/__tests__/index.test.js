import React from "react";
import assert from "power-assert";
import { render, shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Notification from "../index";

describe("<Notification/>", () => {
  it("should render a <Notification/> components", () => {
    const wrapper = render(
      <div>
        <Notification title="哈哈" type="success" />
        <Notification title="哈哈" type="error" />
        <Notification title="哈哈" type="info" />
        <Notification title="哈哈" type="warning" />
        <Notification title="哈哈" type="loading" />
        <Notification title="哈哈" type="open" />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-notification classnames", () => {
    const wrapper = shallow(<Notification title="哈哈" type="success" />);
    assert(wrapper.find(".cuke-notification").length === 1);
    assert(wrapper.find(".message-success").length === 1);
  });

  it.skip("should 2s ago emit callback", () => {
    const wrapper = mount(
      <Notification
        title="哈哈"
        type="success"
        duration={2}
        onClose={() => wrapper.setProps({ title: "回调" })}
      />
    );

    setTimeout(() => {
      assert(wrapper.props().title === "回调");
    }, 2000);
  });
});
