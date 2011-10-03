class CreateProductCosts < ActiveRecord::Migration
  def change
    create_table :product_costs do |t|
      t.references :product
      t.references :tax_master
      t.boolean :cost_applicable
      t.date :cost_eff_start_date
      t.date :cost_eff_end_date
      t.float :basic_purchase_cost
      t.float :purchase_cost_inc_vat
      t.float :cost_to_retailer
      t.float :cost_to_wholesaler
      t.float :max_retail_price

      t.timestamps
    end
    add_index :product_costs, :product_id
    add_index :product_costs, :tax_master_id
  end
end
