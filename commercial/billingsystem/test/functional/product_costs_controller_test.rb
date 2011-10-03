require 'test_helper'

class ProductCostsControllerTest < ActionController::TestCase
  setup do
    @product_cost = product_costs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:product_costs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create product_cost" do
    assert_difference('ProductCost.count') do
      post :create, :product_cost => @product_cost.attributes
    end

    assert_redirected_to product_cost_path(assigns(:product_cost))
  end

  test "should show product_cost" do
    get :show, :id => @product_cost.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @product_cost.to_param
    assert_response :success
  end

  test "should update product_cost" do
    put :update, :id => @product_cost.to_param, :product_cost => @product_cost.attributes
    assert_redirected_to product_cost_path(assigns(:product_cost))
  end

  test "should destroy product_cost" do
    assert_difference('ProductCost.count', -1) do
      delete :destroy, :id => @product_cost.to_param
    end

    assert_redirected_to product_costs_path
  end
end
