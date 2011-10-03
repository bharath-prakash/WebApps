class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :category_name
      t.string :category_desc
      t.references :supplier

      t.timestamps
    end
    add_index :categories, :supplier_id
  end
end
