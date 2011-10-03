class CreatePackedUnits < ActiveRecord::Migration
  def change
    create_table :packed_units do |t|
      t.string :unit_code
      t.string :unit_name
      t.float :no_of_units
      t.float :unit_wieght
      t.float :total_wieght      

      t.timestamps
    end
   
  end
end
