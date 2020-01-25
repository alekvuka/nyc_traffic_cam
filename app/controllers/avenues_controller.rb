require 'pry'

class AvenuesController < ApplicationController

  def all
    @avenues = Avenue.all
    render json: @avenues, only: [:id, :name]
  end

  def add_request
    binding.pry
  end

end
