# encoding: utf-8

class AvatarUploader < CarrierWave::Uploader::Base
  storage :file

  def store_dir
    "uploads/#{mounted_as}/#{model.id}"
  end

  def default_url
    "no_avatar.gif"
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end

end
