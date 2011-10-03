class CreateTaxMasters < ActiveRecord::Migration
  def change
    create_table :tax_masters do |t|
      t.string :tax_type
      t.string :description
      t.float :percent

      t.timestamps
    end
  end
end
