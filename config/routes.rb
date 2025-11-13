Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get "up" => "rails/health#show", as: :rails_health_check

  root to: "pages#home"
  get "qui-suis-je", to: "pages#me", as: "me"
  get "projet", to: "pages#projet", as: "projet"
  get "services", to: "pages#services", as: "services"
  get "contact", to: "pages#contact", as: "contact"

end
