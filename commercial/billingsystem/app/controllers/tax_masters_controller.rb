class TaxMastersController < ApplicationController
  # GET /tax_masters
  # GET /tax_masters.json
  def index
    @tax_masters = TaxMaster.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @tax_masters }
    end
  end

  # GET /tax_masters/1
  # GET /tax_masters/1.json
  def show
    @tax_master = TaxMaster.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render :json => @tax_master }
    end
  end

  # GET /tax_masters/new
  # GET /tax_masters/new.json
  def new
    @tax_master = TaxMaster.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render :json => @tax_master }
    end
  end

  # GET /tax_masters/1/edit
  def edit
    @tax_master = TaxMaster.find(params[:id])
  end

  # POST /tax_masters
  # POST /tax_masters.json
  def create
    @tax_master = TaxMaster.new(params[:tax_master])

    respond_to do |format|
      if @tax_master.save
        format.html { redirect_to @tax_master, :notice => 'Tax master was successfully created.' }
        format.json { render :json => @tax_master, :status => :created, :location => @tax_master }
      else
        format.html { render :action => "new" }
        format.json { render :json => @tax_master.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /tax_masters/1
  # PUT /tax_masters/1.json
  def update
    @tax_master = TaxMaster.find(params[:id])

    respond_to do |format|
      if @tax_master.update_attributes(params[:tax_master])
        format.html { redirect_to @tax_master, :notice => 'Tax master was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @tax_master.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /tax_masters/1
  # DELETE /tax_masters/1.json
  def destroy
    @tax_master = TaxMaster.find(params[:id])
    @tax_master.destroy

    respond_to do |format|
      format.html { redirect_to tax_masters_url }
      format.json { head :ok }
    end
  end
end
