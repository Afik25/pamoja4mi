from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from typing import Optional
from datetime import datetime

class ChatGroupDetails(SQLModel, TimeMixin, table=True):
    __tablename__ = "chat_groups_details"

    id: int = Field(primary_key=True, nullable=False)
    join_dates: datetime = Field(sa_column=Column("join_dates", String, nullable=True, unique=True))
    joined_through: str = Field(sa_column=Column("joined_through", String, nullable=True, unique=True)) #link_invitation/added
    # 
    # relationship back_populates
    chat_group_id: Optional[int] = Field(
        default=None, foreign_key="chat_groups.id", nullable=False)
    chat_group: Optional["ChatGroup"] = Relationship(back_populates="chat_group_details")
    #
    user_id: Optional[int] = Field(
        default=None, foreign_key="users.id", nullable=False)
    user: Optional["User"] = Relationship(back_populates="chat_group_details")
    #
    message: Optional["Message"] = Relationship(back_populates="chat_group_details")

