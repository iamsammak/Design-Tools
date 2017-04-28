require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get static_pages" do
    get sessions_static_pages_url
    assert_response :success
  end

  test "should get users" do
    get sessions_users_url
    assert_response :success
  end

end
