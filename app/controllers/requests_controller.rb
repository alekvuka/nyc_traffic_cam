require 'pry'

class RequestsController < ApplicationController

  def create
    #binding.pry
    @request = Request.create(text: params[:request], email: params[:email])
    render json: @request, only: [:text, :email]
  end

end
