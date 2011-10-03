class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :login_name
      t.string :password
      t.string :first_name
      t.string :last_name
      t.text :address
      t.string :contact_no
      t.string :role
      t.string :created_by
      t.string :updated_by

      t.timestamps
    end
  end
end
