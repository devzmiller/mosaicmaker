class User < ActiveRecord::Base
  validates :name, :email, :password_hash, presence: true
  validates :email, uniqueness: true

  def password
    @passowrd ||= BCrypt::Password.new(password_hash)
  end

  def password=(new_password)
    return false if new_password == ""
    @password = BCrypt::Password.create(new_password)
    self.password_hash = @password
  end
end
