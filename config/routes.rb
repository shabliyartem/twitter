Twitter::Application.routes.draw do

  devise_for :users

  resources :users, :except => [:destroy, :new, :create] do
    post :follow, :on => :member
    delete :unfollow, :on => :member
    resources :tweets, :except => [:index, :show]
  end

  root :to => 'users#show', :as => 'profile'
end
