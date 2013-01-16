Twitter::Application.routes.draw do

  devise_for :users

  match '/auth/:provider/callback' => 'authentications#create'

  resources :users, :except => [:destroy, :new, :create] do
    post :follow, :on => :member
    delete :unfollow, :on => :member
    resources :tweets, :except => [:index, :show]
  end

  post 'clone_repo' => 'users#clone_repo'

  root :to => 'users#show', :as => 'profile'
end
