class Supplier < ActiveRecord::Base

	validates :supplier_name,  :presence => true , :uniqueness =>true,:length => { :minimum => 3 }
  validates :supplier_address, :presence => true, :length => { :minimum => 5 }
  validates :contact_person, :presence => true
  validates :tin_no, :presence => true, :uniqueness =>true, :numericality => true, :length => { :minimum => 8 }
  validates :phone_no, :presence => true, :numericality => true, :length => { :minimum => 10 }
  validates :email, :presence => true, :uniqueness =>true, :format => { :with => /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i}

has_many :categories, :dependent => :destroy

def self.find_all_supplier
Supplier.find(:all, :order => "supplier_name").map {|u| [u.supplier_name, u.id] }
end

end
