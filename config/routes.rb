Twitter::Application.routes.draw do

  devise_for :users

  resources :initial_projects do
    post :project_structure, :on => :collection
    get :file_content, :on => :collection
    put 'file_content' => "initial_projects#save_file_content", :on => :collection
  end

  match '/auth/:provider/callback' => 'authentications#create'

  resources :users, :except => [:destroy, :new, :create] do
    post :follow, :on => :member
    delete :unfollow, :on => :member
    resources :tweets, :except => [:index, :show]
  end

  post 'clone_repo' => 'users#clone_repo'

  root :to => 'users#show', :as => 'profile'
end
