class HomeController < ApplicationController
  def index
    render react_component: 'Main'
  end
end
