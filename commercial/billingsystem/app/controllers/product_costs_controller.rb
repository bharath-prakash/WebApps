class ProductCostsController < ApplicationController
  # GET /product_costs
  # GET /product_costs.json
  def index
    @product_costs = ProductCost.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @product_costs }
    end
  end

  # GET /product_costs/1
  # GET /product_costs/1.json
  def show
    @product_cost = ProductCost.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render :json => @product_cost }
    end
  end

  # GET /product_costs/new
  # GET /product_costs/new.json
  def new
    @product_cost = ProductCost.new
	@products = Product.find_all
	@tax_masters = TaxMaster.find_all

    respond_to do |format|
      format.html # new.html.erb
      format.json { render :json => @product_cost }
    end
  end

  # GET /product_costs/1/edit
  def edit
    @product_cost = ProductCost.find(params[:id])
	@products = Product.find_all
	@tax_masters = TaxMaster.find_all
  end

  # POST /product_costs
  # POST /product_costs.json
  def create
    @product_cost = ProductCost.new(params[:product_cost])
	@products = Product.find_all
	@tax_masters = TaxMaster.find_all

    respond_to do |format|
      if @product_cost.save
        format.html { redirect_to @product_cost, :notice => 'Product cost was successfully created.' }
        format.json { render :json => @product_cost, :status => :created, :location => @product_cost }
      else
        format.html { render :action => "new" }
        format.json { render :json => @product_cost.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /product_costs/1
  # PUT /product_costs/1.json
  def update
    @product_cost = ProductCost.find(params[:id])
	@products = Product.find_all
	@tax_masters = TaxMaster.find_all

    respond_to do |format|
      if @product_cost.update_attributes(params[:product_cost])
        format.html { redirect_to @product_cost, :notice => 'Product cost was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @product_cost.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /product_costs/1
  # DELETE /product_costs/1.json
  def destroy
    @product_cost = ProductCost.find(params[:id])
    @product_cost.destroy

    respond_to do |format|
      format.html { redirect_to product_costs_url }
      format.json { head :ok }
    end
  end
end
