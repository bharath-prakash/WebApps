class TaxMaster < ActiveRecord::Base
validates :tax_type,  :presence => true,:uniqueness =>true
validates :description,  :presence => true
  validates :percent, :presence => true, :numericality => true 

has_many :product_costs

def self.find_all
TaxMaster.find(:all, :order => "tax_type").map {|u| [u.tax_type, u.id] }
end

end
