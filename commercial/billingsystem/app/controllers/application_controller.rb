class ApplicationController < ActionController::Base
  protect_from_forgery
  
   def login_required
    if session[:user]
      return true
    end
    flash[:warning]='Please login to continue'
	puts 'Inside App Controller#######################################'
	puts request.remote_ip
	puts request.url
    session[:return_to] = request.url
    redirect_to :controller => "users", :action => "login" 
    return false 
  end

  def current_user
    session[:user]
  end

  def redirect_to_stored
    if return_to = session[:return_to]
      session[:return_to]=nil
      redirect_to_url(return_to)
    else
      redirect_to :controller=>'users', :action=>'welcome'
    end
  end
  
end
