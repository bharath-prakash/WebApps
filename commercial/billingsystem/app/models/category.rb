class Category < ActiveRecord::Base
  validates :category_name,  :presence => true , :uniqueness =>true,:length => { :minimum => 3 }
  validates :category_desc, :presence => true, :length => { :minimum => 5 }
  
  belongs_to :supplier
  has_many :products
  
def self.find_all
Category.find(:all, :order => "category_name").map {|u| [u.category_name, u.id] }
end

end
