Rails.application.routes.draw do
  root 'static#index'

  namespace :api, default: {format: :json} do
    namespace :v1 do
      get 'greetings', to: 'greetings#index'
    end
  end
end
