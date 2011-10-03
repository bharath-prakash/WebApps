require 'test_helper'

class PackedUnitsControllerTest < ActionController::TestCase
  setup do
    @packed_unit = packed_units(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:packed_units)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create packed_unit" do
    assert_difference('PackedUnit.count') do
      post :create, :packed_unit => @packed_unit.attributes
    end

    assert_redirected_to packed_unit_path(assigns(:packed_unit))
  end

  test "should show packed_unit" do
    get :show, :id => @packed_unit.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @packed_unit.to_param
    assert_response :success
  end

  test "should update packed_unit" do
    put :update, :id => @packed_unit.to_param, :packed_unit => @packed_unit.attributes
    assert_redirected_to packed_unit_path(assigns(:packed_unit))
  end

  test "should destroy packed_unit" do
    assert_difference('PackedUnit.count', -1) do
      delete :destroy, :id => @packed_unit.to_param
    end

    assert_redirected_to packed_units_path
  end
end
