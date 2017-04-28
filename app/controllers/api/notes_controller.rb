class Api::NotesController < ApplicationController
  def index
    if params[:notebook_id]
      @notes = Note.where(notebook_id: params[:notebook_id])
    elsif params[:user_id]
      @notes = Note.where(user_id: params[:user_id])
    else
      @notes = Pin.all
      console.log("Pin.all - check notes_controller")
    end

    render :index
  end

  def show
    @note = Note.find(params[:id])
    render :show
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find(params[:id])
    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destory
    render 'api/notes/show'
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :done, :notebook_id, :user_id)
  end
end
