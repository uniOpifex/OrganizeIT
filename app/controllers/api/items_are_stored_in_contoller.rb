class Api::ItemAreStoredInController < ApplicationController
  

  def index
    @storage_items = Storage_Item.all
    @items = Item.joins(:storage_item).includes(:storage_item).all
    @items_are_stored_in = storage_item.joins(:id)
  end

  def show
    item_are_stored_in_id = params[:id]
  end

  def create
    
  end

  def update
    
  end

  def destroy
    
  end

  private

  def storage_item_params
  end
 
end