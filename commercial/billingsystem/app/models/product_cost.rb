class ProductCost < ActiveRecord::Base

validates :basic_purchase_cost,  :presence => true ,:numericality => true
validates :purchase_cost_inc_vat,  :presence => true ,:numericality => true
validates :cost_to_retailer,  :presence => true ,:numericality => true
validates :cost_to_wholesaler,  :presence => true ,:numericality => true
validates :max_retail_price,  :presence => true ,:numericality => true

  belongs_to :product
  belongs_to :tax_master
end
