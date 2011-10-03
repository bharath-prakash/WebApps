class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :product_code
      t.string :product_name
      t.references :category
	  t.references :packed_unit

      t.timestamps
    end
    add_index :products, :category_id
	add_index :products, :packed_unit_id
  end
end
