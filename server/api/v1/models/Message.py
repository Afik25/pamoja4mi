from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from typing import List, Optional
from datetime import datetime

class Message(SQLModel, TimeMixin, table=True):
    __tablename__ = "messages"

    id: int = Field(primary_key=True, nullable=False)
    dates: datetime = Field(sa_column=Column("dates", String, nullable=True, unique=False))
    # 
    # relationship back_populates
    message_details: List['MessageDetails'] = Relationship(back_populates="message")
    #
    chat_group_details_id: Optional[int] = Field(
        default=None, foreign_key="chat_groups_details.id", nullable=False)
    chat_group_details: Optional["ChatGroupDetails"] = Relationship(
        back_populates="message")
    #
    chat_group_id: Optional[int] = Field(
        default=None, foreign_key="chat_groups.id", nullable=False)
    chat_group: Optional["ChatGroup"] = Relationship(
        back_populates="message")

