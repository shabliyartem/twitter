require 'test_helper'

class InitialProjectsControllerTest < ActionController::TestCase
  setup do
    @initial_project = initial_projects(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:initial_projects)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create initial_project" do
    assert_difference('InitialProject.count') do
      post :create, initial_project: { name: @initial_project.name, user_id: @initial_project.user_id }
    end

    assert_redirected_to initial_project_path(assigns(:initial_project))
  end

  test "should show initial_project" do
    get :show, id: @initial_project
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @initial_project
    assert_response :success
  end

  test "should update initial_project" do
    put :update, id: @initial_project, initial_project: { name: @initial_project.name, user_id: @initial_project.user_id }
    assert_redirected_to initial_project_path(assigns(:initial_project))
  end

  test "should destroy initial_project" do
    assert_difference('InitialProject.count', -1) do
      delete :destroy, id: @initial_project
    end

    assert_redirected_to initial_projects_path
  end
end
