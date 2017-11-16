Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :items 
    resources :storage_items
    resources :users do
      resources :items 
      resources :item_collections
    end
  end
 
end
