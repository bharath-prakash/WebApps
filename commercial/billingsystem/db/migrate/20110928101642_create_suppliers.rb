class CreateSuppliers < ActiveRecord::Migration
  def change
    create_table :suppliers do |t|
      t.string :supplier_name
      t.text :Supplier_address
      t.string :contact_person
      t.integer :tin_no
      t.integer :phone_no
      t.string :email
      t.float :outstand_bal

      t.timestamps
    end
  end
end
