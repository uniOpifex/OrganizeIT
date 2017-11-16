class Api::StorageItemsController < ApplicationController
    
  before_action :authenticate_user!
  
    def index
      @storage_items = current_user.storage_items
  
      render json: @storage_items
    end
  
    def show
      @storage_item = storage_item.find(params[:id])
  
      render json: @storage_item
    end
  
    def create
      @user = current_user
      puts 'hello burns and nate'
      @storage_item = @user.storage_items.build(storage_item_params)
  
      if @user.save
        render json: @storage_item, status: :created
      else
        render json: @storage_item.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @storage_item = storage_item.find(params[:id])
  
  
      if @storage_item.update(storage_item_params)
        render json: @storage_item
      else
        render json: @storage_item.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      storage_item_id = params[:id]
      @storage_item = storage_item.find_by_id(storage_item_id)
      @storage_item.delete
      render json: {
          msg: 'Delete the storage_item successfully'
      }
    end
  
    private
  
    def storage_item_params
      params.require(:storage_items).permit(:title, :description)
    end
   
  end