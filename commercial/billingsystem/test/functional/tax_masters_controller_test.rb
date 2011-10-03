require 'test_helper'

class TaxMastersControllerTest < ActionController::TestCase
  setup do
    @tax_master = tax_masters(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:tax_masters)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create tax_master" do
    assert_difference('TaxMaster.count') do
      post :create, :tax_master => @tax_master.attributes
    end

    assert_redirected_to tax_master_path(assigns(:tax_master))
  end

  test "should show tax_master" do
    get :show, :id => @tax_master.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @tax_master.to_param
    assert_response :success
  end

  test "should update tax_master" do
    put :update, :id => @tax_master.to_param, :tax_master => @tax_master.attributes
    assert_redirected_to tax_master_path(assigns(:tax_master))
  end

  test "should destroy tax_master" do
    assert_difference('TaxMaster.count', -1) do
      delete :destroy, :id => @tax_master.to_param
    end

    assert_redirected_to tax_masters_path
  end
end
