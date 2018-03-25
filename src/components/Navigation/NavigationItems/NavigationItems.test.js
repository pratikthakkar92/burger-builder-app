import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigatiomItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });
  it('should render two <NavigatiomItem /> elements if not authenticated', () => {
    expect(wrapper.find(NavigatiomItem)).toHaveLength(2);
  });
  it("should render three <NavigatiomItem /> elements if authenticated", () => {
    wrapper.setProps({isAuthenticated: true});
    expect(wrapper.find(NavigatiomItem)).toHaveLength(3);
  });
  it("should render a Logout button", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.contains(<NavigatiomItem link="/logout">Logout</NavigatiomItem>)).toEqual(true);
  });
});