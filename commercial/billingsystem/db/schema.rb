# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20111003112508) do

  create_table "categories", :force => true do |t|
    t.string   "category_name"
    t.string   "category_desc"
    t.integer  "supplier_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "categories", ["supplier_id"], :name => "index_categories_on_supplier_id"

  create_table "lists", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "packed_units", :force => true do |t|
    t.string   "unit_code"
    t.string   "unit_name"
    t.float    "no_of_units"
    t.float    "unit_wieght"
    t.float    "total_wieght"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "product_costs", :force => true do |t|
    t.integer  "product_id"
    t.integer  "tax_master_id"
    t.boolean  "cost_applicable"
    t.date     "cost_eff_start_date"
    t.date     "cost_eff_end_date"
    t.float    "basic_purchase_cost"
    t.float    "purchase_cost_inc_vat"
    t.float    "cost_to_retailer"
    t.float    "cost_to_wholesaler"
    t.float    "max_retail_price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "product_costs", ["product_id"], :name => "index_product_costs_on_product_id"
  add_index "product_costs", ["tax_master_id"], :name => "index_product_costs_on_tax_master_id"

  create_table "products", :force => true do |t|
    t.string   "product_code"
    t.string   "product_name"
    t.integer  "category_id"
    t.integer  "packed_unit_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "products", ["category_id"], :name => "index_products_on_category_id"
  add_index "products", ["packed_unit_id"], :name => "index_products_on_packed_unit_id"

  create_table "suppliers", :force => true do |t|
    t.string   "supplier_name"
    t.string   "contact_person"
    t.integer  "tin_no",           :limit => 8
    t.integer  "phone_no",         :limit => 8
    t.string   "email"
    t.float    "outstand_bal"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "supplier_address"
  end

  create_table "tasks", :force => true do |t|
    t.string   "name"
    t.boolean  "done"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "list_id"
  end

  create_table "tax_masters", :force => true do |t|
    t.string   "tax_type"
    t.string   "description"
    t.float    "percent"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "login_name"
    t.string   "password"
    t.string   "first_name"
    t.string   "last_name"
    t.text     "address"
    t.string   "contact_no"
    t.string   "role"
    t.string   "created_by"
    t.string   "updated_by"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
