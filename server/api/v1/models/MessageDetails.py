from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from typing import Optional
from datetime import datetime


class MessageDetails(SQLModel, TimeMixin, table=True):
    __tablename__ = "message_details"

    id: int = Field(primary_key=True, nullable=False)
    dates: datetime = Field(sa_column=Column(
        "dates", String, nullable=True, unique=False))
    content: datetime = Field(sa_column=Column(
        "dates", String, nullable=True, unique=False))  # text/asset_link
    #
    # relationship back_populates
    message_id: Optional[int] = Field(
        default=None, foreign_key="messages.id", nullable=False)
    message: Optional["Message"] = Relationship(
        back_populates="message_details")
