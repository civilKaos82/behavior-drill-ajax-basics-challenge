class CreateSuperheros < ActiveRecord::Migration
  def change
    create_table :superheros do |t|
      t.string :name
      t.text :secret_identity
      t.timestamps
    end
  end
end
