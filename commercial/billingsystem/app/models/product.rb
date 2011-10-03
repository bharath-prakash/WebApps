class Product < ActiveRecord::Base

validates :product_code,  :presence => true , :uniqueness =>true,:length => { :minimum => 5 }
validates :product_name,  :presence => true , :length => { :minimum => 5 }

  belongs_to :category
  belongs_to :packed_unit
  has_many :product_costs, :dependent => :destroy
  
  def self.find_all
Product.find(:all, :order => "product_code").map {|u| [u.product_code, u.id] }
end
  
end
