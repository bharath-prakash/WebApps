class PackedUnitsController < ApplicationController
  # GET /packed_units
  # GET /packed_units.json
  def index
    @packed_units = PackedUnit.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @packed_units }
    end
  end

  # GET /packed_units/1
  # GET /packed_units/1.json
  def show
    @packed_unit = PackedUnit.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render :json => @packed_unit }
    end
  end

  # GET /packed_units/new
  # GET /packed_units/new.json
  def new
    @packed_unit = PackedUnit.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render :json => @packed_unit }
    end
  end

  # GET /packed_units/1/edit
  def edit
    @packed_unit = PackedUnit.find(params[:id])
  end

  # POST /packed_units
  # POST /packed_units.json
  def create
    @packed_unit = PackedUnit.new(params[:packed_unit])

    respond_to do |format|
      if @packed_unit.save
        format.html { redirect_to @packed_unit, :notice => 'Packed unit was successfully created.' }
        format.json { render :json => @packed_unit, :status => :created, :location => @packed_unit }
      else
        format.html { render :action => "new" }
        format.json { render :json => @packed_unit.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /packed_units/1
  # PUT /packed_units/1.json
  def update
    @packed_unit = PackedUnit.find(params[:id])

    respond_to do |format|
      if @packed_unit.update_attributes(params[:packed_unit])
        format.html { redirect_to @packed_unit, :notice => 'Packed unit was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @packed_unit.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /packed_units/1
  # DELETE /packed_units/1.json
  def destroy
    @packed_unit = PackedUnit.find(params[:id])
    @packed_unit.destroy

    respond_to do |format|
      format.html { redirect_to packed_units_url }
      format.json { head :ok }
    end
  end
end
