class PackedUnit < ActiveRecord::Base

validates :unit_code,  :presence => true,:uniqueness =>true
validates :unit_name,  :presence => true
  validates :no_of_units, :presence => true, :numericality => true 
  validates :unit_wieght, :presence => true, :numericality => true 
  validates :total_wieght, :presence => true, :numericality => true 

  has_many :products
  
  def self.find_all
PackedUnit.find(:all, :order => "unit_code").map {|u| [u.unit_code, u.id] }
end
  
end
