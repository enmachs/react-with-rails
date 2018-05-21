class HomeController < ApplicationController
  def index
    render react_component: 'Hello', props: { name: 'world!!' }
  end

  def my_house
    render react_component: 'Custom'
  end
end
