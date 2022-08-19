class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    if @greetings.empty?
      json_response({ msg: 'no greeting found' }, 400)
    else
      render json: @greetings[rand(0...@greetings.length - 1)]
    end
  end
end
