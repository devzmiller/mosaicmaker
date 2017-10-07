class User < ActiveRecord::Base
  validates :name, :email, :password_hash, presence: true
  validates :email, uniqueness: true
end
