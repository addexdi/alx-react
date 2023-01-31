import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("<Notifications/>", () => {
  it("Test if notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Test if notifications renders 3 times", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("li").length).toBe(3);
  });

  it('Test that notifications renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("p").text()).toBe("Here is the list of notifications");
  });
});
